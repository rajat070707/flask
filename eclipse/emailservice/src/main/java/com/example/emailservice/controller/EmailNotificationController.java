package com.example.emailservice.controller;

import com.example.emailservice.dto.EmailMessage;
import com.example.emailservice.service.impl.EmailNotificationImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;
import org.thymeleaf.context.Context;

import javax.imageio.IIOException;
import javax.mail.MessagingException;
import java.io.IOException;


@RestController
public class EmailNotificationController {


    @Autowired
    JavaMailSender javaMailSender;

    @Autowired
    EmailNotificationImpl emailNotificationImpl;


    @RequestMapping("/sendmail")
    public String sendMail(@RequestBody EmailMessage emailMessage) throws IOException, MessagingException {
        return emailNotificationImpl.mail(emailMessage);
    }

    @RequestMapping("/sendhtml")
    public String htmlMail(@RequestBody EmailMessage emailMessage)throws IOException,MessagingException{
        Context context=new Context();
        context.setVariable("name",emailMessage.getName());
        return emailNotificationImpl.htmlMessege(emailMessage.getEmailId(),emailMessage.getSubject(),"template",context);
    }
    @RequestMapping("/sendPdf")
    public String pdfMail(@RequestBody EmailMessage emailMessage) throws  IOException,MessagingException {

    }

}
