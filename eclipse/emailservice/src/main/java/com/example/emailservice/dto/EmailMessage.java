package com.example.emailservice.dto;

public class EmailMessage {
    private String emailId;
    private String subject;
    private  String name;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmailId() {
        return emailId;
    }

    public void setEmailId(String emailId) {
        this.emailId = emailId;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    @Override
    public String toString() {
        return "EmailMessage{" +
                "emailId='" + emailId + '\'' +
                ", subject='" + subject + '\'' +
                '}';
    }
}
