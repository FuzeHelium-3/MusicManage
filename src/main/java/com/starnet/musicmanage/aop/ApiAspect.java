package com.starnet.musicmanage.aop;

import com.starnet.musicmanage.utils.JsonResult;
import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

/**
 * @ClassName ApiAspect
 * @Description TODO
 * @Author SupreacyXXXXX
 * @Date 2020/7/23
 * @Version 1.0
 **/

@Aspect
@Component
public class ApiAspect {
    private final static Logger logger = LoggerFactory.getLogger(ApiAspect.class);

    @Pointcut("execution(* com.starnet.musicmanage.controller.*.*(..))")
    public void log(){}

    @Before("log()")
    public void doBefore(JoinPoint joinPoint){
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes();
        HttpServletRequest request = attributes.getRequest();
        logger.info("=======================doBefore============================");
        logger.info("|  url={}",request.getRequestURI());
        logger.info("|  method={}",request.getMethod());
        logger.info("|  ip={}",request.getRemoteAddr());
        logger.info("|  class_method={}",joinPoint.getSignature().getDeclaringTypeName()+
                "."+joinPoint.getSignature().getName());
        logger.info("|  args={}",joinPoint.getArgs());
        logger.info("=======================doBefore============================");
    }

    @AfterReturning(returning = "object",pointcut = "log()")
    public void doAfterReturning(Object object){
        logger.info("=======================afterReturning============================");
        logger.info("|   return={}",(JsonResult)object);
        logger.info("=======================afterReturning============================");
    }


}
