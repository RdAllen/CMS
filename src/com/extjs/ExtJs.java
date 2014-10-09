package com.extjs;

import net.sf.json.JSONArray;
import net.sf.json.JSONObject;

/**
 * @author dong.ren
 * @version
 * 返回JSON 的数据  
 * */
public class ExtJs {
	public static JSONObject WriteJsonObject(
			boolean success,
			JSONObject errors,
            int total ,
            String msg  ,
            JSONObject dataJsonObject, 
			JSONArray dataJsonArray
			){
		JSONObject jo = new JSONObject();
		jo.put("success", success);
		if(errors != null){
			jo.put("errors", errors);
		}
		if(total>0){
			jo.put("total",total);
		}
		if(msg != null){
			jo.put("msg", msg);			
		}
		if(dataJsonObject != null){
			jo.put("data", dataJsonObject);
		}
		if(dataJsonArray != null){
			jo.put("data", dataJsonArray);
		}		
		return jo;
	}

}
