package com.starnet.musicmanage.bean;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.io.Serializable;

@Getter
@Setter
@ToString
@EqualsAndHashCode
public class Linux implements Serializable {
    private Integer id;

    private String name;

    private Integer status;

    private String ad;

    private String no;

    private static final long serialVersionUID = 1L;
}