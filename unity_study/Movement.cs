using System.Collections;
using System.Collections.Generic;
using System.Threading;
using UnityEngine;

public class Movement : MonoBehaviour
{
    Vector3 forward = new Vector3(0, 0, 1);
    public float speed = 100;
    // Start is called before the first frame update
    void Start()
    {
        
    }
    
    // Update is called once per frame
    void Update()
    {

        if (Input.GetKey(KeyCode.Space))
        {
            transform.Translate(forward * speed*Time.deltaTime);
        }
        if (Input.GetKey(KeyCode.M))
        {
            transform.Translate(forward * speed * -1 * Time.deltaTime);
        }
    }
}
