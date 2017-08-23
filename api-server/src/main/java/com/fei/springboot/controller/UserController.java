package com.fei.springboot.controller;

import java.util.Map;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.fei.springboot.controller.util.TokenUtil;

@RestController
@RequestMapping("/user")
public class UserController {

	private static Logger log = LoggerFactory.getLogger(UserController.class);
	
	@CrossOrigin(origins="*")//允许跨域请求
	@RequestMapping(value="/login",method=RequestMethod.POST)
	public JSONObject login(@RequestBody Map<String,String> map){
		String username = map.get("username");
		String password = map.get("password");
		
		log.info("登录请求...username="+username+"  pwd=" + password);
		
		JSONObject r = new JSONObject();
		if("admin".equals(username) && "123456".equals(password))	{
			r.put("code", "200");
			r.put("msg", "登录成功");
			r.put("token", TokenUtil.getToken(username));
		}else{
			r.put("code", "500");
			r.put("msg", "登录失败");
		}
		return r;
	}
	
}
