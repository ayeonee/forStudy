using CoherentNoise.Generation.Displacement;
using System.Collections;
using System.Collections.Generic;
using System.Numerics;
using UnityEditor.Build;
using UnityEngine;

public class AnimationCtrl : MonoBehaviour
{
    
    protected Animator mAvatar;
    // Start is called before the first frame update
    int n = 0;

    void Start()
    {
        mAvatar = GetComponent<Animator>();
    }
    private void OnCollisionStay(Collision collision)
    {
        GameObject womanPlayer = GameObject.Find("Female A");
        AnimationCtrlW playerScript = womanPlayer.GetComponent<AnimationCtrlW>();
        if (playerScript.flag == 1)
        {
            mAvatar.SetTrigger("BLOCK");
        }

        if (playerScript.flag == 2)
        {
            if (n == 0)
            {
                mAvatar.SetTrigger("DIE");
                n = 1;
            }
        }
    }
    void Update()
    {
        
         if (Input.GetKeyUp(KeyCode.LeftShift))
        {
            mAvatar.SetTrigger("ATTACK1");
        }

        if (Input.GetKeyUp(KeyCode.LeftAlt))
        {
            mAvatar.SetTrigger("ATTACK2");
        }


        if (Input.GetKeyUp(KeyCode.F))
        {
            mAvatar.SetTrigger("MOVE");
        }

        if (Input.GetKeyUp(KeyCode.D)){
            mAvatar.SetTrigger("RUN");
        }

        if (Input.GetKeyUp(KeyCode.S))
        {
             transform.Rotate(UnityEngine.Vector3.up * 180);
        }

        if (Input.GetKeyUp(KeyCode.E))
        {
            transform.Rotate(UnityEngine.Vector3.up * 90);
        }
   
    }
}
