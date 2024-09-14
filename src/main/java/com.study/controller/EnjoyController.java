package com.study.controller;


import com.study.domain.Enjoy;
import com.study.service.EnjoyService;
import com.study.service.RouteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping("/enjoys")
public class EnjoyController {
    @Autowired
    private EnjoyService enjoyService;

    @PostMapping
    public Result save(@RequestBody Enjoy enjoy) {
        boolean flag = enjoyService.save(enjoy);
        Integer code = flag ? Code.SAVE_ENJOY_OK : Code.SAVE_ENJOY_ERR;
        String msg = flag ? "" : "添加失败,请重试！";
        return new Result(code,flag,msg);
    }
//    @PostMapping
//    public Result save(@RequestBody Enjoy enjoy) {
//        boolean flag = enjoyService.save(enjoy);
//        Integer code = flag ? Code.SAVE_ENJOY_OK : Code.SAVE_ENJOY_ERR;
//        String msg = flag ? "" : "添加失败,请重试！";
//        return new Result(code,flag,msg);
//    }
    @GetMapping
    public Result getAll() {
        String[] all = enjoyService.getAll();
        Integer code = all != null ? Code.GET_ENJOY_OK : Code.GET_ENJOY_ERR;
        String msg = all != null ? "" : "数据查询失败，请重试！";
        return new Result(code,all,msg);
    }
    @DeleteMapping("/{id}")
    public Result deleteById(@PathVariable String id){
        int id1= Integer.parseInt(id);
        boolean flag = enjoyService.delete(id1);
        Integer code = flag ? Code.SAVE_ENJOY_OK : Code.SAVE_ENJOY_ERR;
        String msg = flag ? "" : "删除失败，请重试！";
        return new Result(code,flag,msg);
    }

}
