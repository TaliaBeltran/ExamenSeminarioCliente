const ToDo=require('../../database/ToDo');
const express=require('express');
const router=express.Router();

router.get('/',async(req,res)=>{
    res.json(await ToDo.find());
});

router.post('/',async(req,res)=>{
    let ins=new ToDo(req.body);
    let result=await ins.save();
    if(empty(result)){
        res.json({message:'error al insertar',result});
    }else{
        res.json({message:'usuario insertado',result});
    }
});

router.patch('/:id',(req,res)=>{
    let id=req.params.id;
    ToDo.findByIdAndUpdate(id,req.body,()=>{
        res.json({message:'actualizado'});
    });
});

router.delete('/:id',(req,res)=>{
    ToDo.findByIdAndRemove(req.params.id,()=>{
        res.json({message:'eliminado'+req.params.id});
    });
});


module.exports=router;