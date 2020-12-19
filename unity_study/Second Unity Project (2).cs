using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using UnityEngine;

public class Jump : MonoBehaviour
{
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetButton("Jump"))
        {
            GetComponent<Rigidbody>().AddForce(new Vector3(0, 30, 0));
        }
    }
}

using System.Collections;
using System.Collections.Generic;
using System.Threading;
using UnityEngine;

public class Movement : MonoBehaviour
{
    Vector3 up = new Vector3(0, 1, 0);
    Vector3 forward = new Vector3(0, 0, 1);
    public float speed = 20;
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {   
        float h = Input.GetAxis("Horizontal");
        float v = Input.GetAxis("Vertical");
        h = h * Time.deltaTime;
        v = v * Time.deltaTime;
        transform.Rotate(up* h * speed);
        transform.Translate(forward* v * speed);

        if (Input.GetButton("Jump"))
        {
            GetComponent<Rigidbody>().AddForce(new Vector3(0, 20, 0));
        }
    }
}

