
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
    Vector3 right = new Vector3(0, 1, 0);
    Vector3 forward = new Vector3(0, 0, 1);
    public float speed = 1;
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
        transform.Rotate(right* h * speed);
        transform.Translate(forward* v * speed);
    }
}

using System.Collections;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Reflection;
using System.Security.Cryptography;
using System.Threading;
using UnityEngine;

public class MovingObject : MonoBehaviour
{
    Vector3 v3;
    float speed = 20.0f;
    // Start is called before the first frame update
    void Start()
    {
        v3 = new Vector3(1, 0, 0);
    }

    // Update is called once per frame
    void Update()
    {
        float position = Input.GetAxis("Vertical");
        position = position * speed * Time.deltaTime;
        transform.Translate(Vector3.forward * position);

        if (Input.GetKey(KeyCode.LeftArrow))
        {
            transform.Translate(v3);
        }
        else if (Input.GetKey(KeyCode.RightArrow))
        {
            transform.Translate((-1) * v3);
        }


    }
}

using System.Collections;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using UnityEngine;

public class Collision : MonoBehaviour
{
    public AudioSource collisionSound;
    
    private void Start()
    {
        collisionSound = GetComponent<AudioSource>();
    }
    private void OnCollisionEnter(UnityEngine.Collision collision)
    {
        collisionSound.Play();
        print("Collision is detected!!!");
    }
}
