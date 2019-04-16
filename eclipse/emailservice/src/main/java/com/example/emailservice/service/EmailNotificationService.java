package com.example.emailservice.service;

import com.example.emailservice.dto.EmailMessage;
import org.thymeleaf.context.Context;

import javax.mail.MessagingException;
import java.io.IOException;

public interface EmailNotificationService  {
    public String mail(EmailMessage emailMessage)throws IOException, MessagingException;
    public String htmlMessege(String to, String subject, String templateName, Context context) throws MessagingException, IOException;
}
