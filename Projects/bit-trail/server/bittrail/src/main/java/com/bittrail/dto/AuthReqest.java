package com.bittrail.dto;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AuthReqest {
    private String email;
    private String password;
}