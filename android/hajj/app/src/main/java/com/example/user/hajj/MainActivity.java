package com.example.user.hajj;

import android.content.Intent;
import android.os.Bundle;
import android.os.Handler;
import android.support.v7.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    private int splashTime = 6000;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

            new Handler().postDelayed(new Runnable(){
                @Override
                public void run(){
                    Intent logPage = new Intent(MainActivity.this,login.class);
                    startActivity(logPage);
                    finish();}},splashTime);
        }
    }

