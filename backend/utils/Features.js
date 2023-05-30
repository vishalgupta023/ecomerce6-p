class ApiFeature{
    constructor(query,queryStr){
        this.query=query;
        this.queryStr=queryStr
    }
    search(){
       const value= this.queryStr.keyword?{
            name:{
                $regex:this.queryStr.keyword,
                $options:"i"
            }
        }:{}
       this.query=this.query.find({...value})
       return this
    }
    filter(){
        let queryCopy={...this.queryStr};
        const removeFields=["keyword","page","limit"];
        removeFields.forEach(key=>delete queryCopy[key]);

        let queryStr=JSON.stringify(queryCopy);
        queryStr=queryStr.replace(/\b(gt|lt|gte|lte)\b/g,key=>`$${key}`)
        queryCopy=JSON.parse(queryStr)
        this.query=  this.query.find(queryCopy);
        return this;
    }
    pagination(productPerPage){
        const currentPage=this.queryStr.page;
        const skip=(currentPage-1)*productPerPage;
        this.query=this.query.find().limit(productPerPage).skip(skip)

        return this
    }
}

module.exports=ApiFeature;