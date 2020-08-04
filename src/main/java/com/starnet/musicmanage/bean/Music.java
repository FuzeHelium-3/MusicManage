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
public class Music implements Serializable {
    private Integer id;

    private String name;

    private String singer;

    private String detail;

    private Integer status;

    private static final long serialVersionUID = 1L;
}