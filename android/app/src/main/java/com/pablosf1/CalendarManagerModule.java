package com.pablosf1;

import android.content.Intent;

import androidx.annotation.NonNull;

import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class CalendarManagerModule  extends ReactContextBaseJavaModule {

    public CalendarManagerModule(ReactApplicationContext reactApplicationContext)
    {
        super(reactApplicationContext);
    }

    @NonNull
    @Override
    public String getName() {
        return "CalendarManager";
    }

    @ReactMethod
    public void addEvent(String title, String startDateIso, String endDateIso, String location, Promise promise)
    {
        String format = "yyyy-MM-dd'T'HH:MM:ss.SSS'Z'";
        SimpleDateFormat simpleDateFormat = new SimpleDateFormat(format);

        Date startDate = null;
        try
        {
            startDate = simpleDateFormat.parse(startDateIso);
        }
        catch (ParseException e)
        {
            promise.reject(e);
        }

        Date endDate = null;
        try
        {
            endDate = simpleDateFormat.parse(endDateIso);
        }
        catch (ParseException e)
        {
            promise.reject(e);
        }

        Intent intent = new Intent(Intent.ACTION_EDIT);
        intent.setType("vnd.android.cursor.item/event");
        intent.setFlags(Intent.FLAG_ACTIVITY_NEW_TASK);
        intent.putExtra("beginTime", startDate.getTime());
        intent.putExtra("endTime", endDate.getTime());
        intent.putExtra("title", title);
        intent.putExtra("location", location);

        getReactApplicationContext().startActivity(intent);
        promise.resolve(null);
    }
}
