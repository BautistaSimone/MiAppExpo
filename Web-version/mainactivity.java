package com.tuempresa.miapp;

import androidx.appcompat.app.AppCompatActivity;
import android.os.Bundle;
import android.webkit.WebView;
import android.webkit.WebViewClient;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.asd); // Assuming your layout file is named asd.xml

        WebView webView = findViewById(R.id.webview);
        webView.setWebViewClient(new WebViewClient()); // Ensures links open within the WebView
        webView.getSettings().setJavaScriptEnabled(true); // Enable JavaScript if your site uses it
        webView.loadUrl("https://vercel-hello-ten-ruby.vercel.app"); 
    }
}