package com.example.hajj_app;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class login extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_login);
    }

    public void logIn(View view){
        Intent intent2 = new Intent(this,info.class);

        EditText editText=(EditText) findViewById(R.id.userName);
        String message = editText.getText().toString();


        intent2.putExtra("",message);
        this.startActivity(intent2);



    }

}
