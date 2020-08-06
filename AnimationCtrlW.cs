using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class AnimationCtrlW : MonoBehaviour
{
    public int flag = 0;
    protected Animator mAvatar;
    // Start is called before the first frame update

    void Start()
    {
        mAvatar = GetComponent<Animator>();
    }

    private void OnTriggerEnter(Collider other)
    {
        print("woman");
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.RightShift))
        {
            mAvatar.SetTrigger("ATTACK1");
            flag = 1;
           StartCoroutine(WaitForIt());
        }

        if (Input.GetKeyDown(KeyCode.End))
        {
            mAvatar.SetTrigger("ATTACK2");
           flag = 2;
            StartCoroutine(WaitForIt());
        }



        if (Input.GetKeyUp(KeyCode.LeftArrow))
        {
            mAvatar.SetTrigger("MOVE");
        }

        if (Input.GetKeyUp(KeyCode.RightArrow))
        {
            mAvatar.SetTrigger("RUN");
        }

        if (Input.GetKeyUp(KeyCode.DownArrow))
        {
            transform.Rotate(UnityEngine.Vector3.up * 180);
        }

        if (Input.GetKeyUp(KeyCode.UpArrow))
        {
            transform.Rotate(UnityEngine.Vector3.up * 90);
        }

    }

    IEnumerator WaitForIt()
    {
        yield return new WaitForSeconds(0.1f);
        flag = 0;
    }
}

