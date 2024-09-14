package com.study.domain;

public class Assignment {

    private String finish;//在数据库中设置值只能是true或false  ?
    private String content;


    public Assignment() {
    }

    public Assignment(String finish, String content) {
        this.finish = finish;
        this.content = content;
    }

    /**
     * 获取
     * @return finish
     */
    public String getFinish() {
        return finish;
    }

    /**
     * 设置
     * @param finish
     */
    public void setFinish(String finish) {
        this.finish = finish;
    }

    /**
     * 获取
     * @return content
     */
    public String getContent() {
        return content;
    }

    /**
     * 设置
     * @param content
     */
    public void setContent(String content) {
        this.content = content;
    }

    public String toString() {
        return "Assignment{finish = " + finish + ", content = " + content + "}";
    }
}
