package com.example.emailservice.service.impl;

import com.example.emailservice.dto.EmailMessage;
import com.example.emailservice.service.EmailNotificationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Component;
import org.thymeleaf.TemplateEngine;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;
import java.io.IOException;

@Component
public class EmailNotificationImpl implements EmailNotificationService {
    @Autowired
    JavaMailSender javaMailSender;

    @Autowired
    TemplateEngine templateEngine;

    public String mail(EmailMessage emailMessage)throws IOException, MessagingException{
        SimpleMailMessage mailMessage = new SimpleMailMessage();
        mailMessage.setTo(emailMessage.getEmailId());
        mailMessage.setSubject(emailMessage.getSubject());
        mailMessage.setText("hello Rajat here");
        javaMailSender.send(mailMessage);

        return "mail sent";
    }

    public String htmlMessege(String to, String subject, String templateName, Context context) throws MessagingException,IOException{
        MimeMessage mimeMessage=javaMailSender.createMimeMessage();
        String body=templateEngine.process(templateName,context);
        MimeMessageHelper helper=new MimeMessageHelper(mimeMessage,true);
        helper.setTo(to);
        helper.setSubject(subject);
        helper.setText(body,true);
        javaMailSender.send(mimeMessage);
        return "html mail sent";
    }
}
