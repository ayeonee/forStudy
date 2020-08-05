using CoherentNoise.Generation.Displacement;
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEngine;

public class AnimationCtrl : MonoBehaviour
{
    public float speed = 20;
    protected Animator mAvatar;
    // Start is called before the first frame update

    void Start()
    {
        mAvatar = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        if (Input.GetKeyUp(KeyCode.LeftShift))
        {
            mAvatar.SetTrigger("ATTACK");
        }     
        
        if (Input.GetKeyUp(KeyCode.F))
        {
            mAvatar.SetTrigger("MOVE");
        }

        if (Input.GetKeyUp(KeyCode.S)){
            mAvatar.SetTrigger("RUN");
        }

        if (Input.GetKeyUp(KeyCode.D))
        {
             transform.Rotate(UnityEngine.Vector3.up * 180);
        }

        if (Input.GetKeyUp(KeyCode.E))
        {
            transform.Rotate(UnityEngine.Vector3.up * 90);
        }
   
    }
}
