package com.study.domain;

public class User {
    private String username;
    private String psword;
    private int id;

    public User(String username, String psword, int id, String alias) {
        this.username = username;
        this.psword = psword;
        this.id = id;
        this.alias = alias;
    }

    private String alias;



    public User() {
    }

    public User(String username, String psword) {
        this.username = username;
        this.psword = psword;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getAlias() {
        return alias;
    }

    public void setAlias(String alias) {
        this.alias = alias;
    }

    /**
     * 获取
     * @return username
     */
    public String getUsername() {
        return username;
    }

    /**
     * 设置
     * @param username
     */
    public void setUsername(String username) {
        this.username = username;
    }

    /**
     * 获取
     * @return psword
     */
    public String getPsword() {
        return psword;
    }

    /**
     * 设置
     * @param psword
     */
    public void setPsword(String psword) {
        this.psword = psword;
    }

    @Override
    public String toString() {
        return "User{" +
                "username='" + username + '\'' +
                ", psword='" + psword + '\'' +
                ", id=" + id +
                ", alias='" + alias + '\'' +
                '}';
    }
}
