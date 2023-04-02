import {Schema,model} from "mongoose";
const ObjId = Schema.Types.ObjectId;
const reducedModel = function (name,cb){
    const schema = cb(Schema,ObjId);
    return model(name,schema)
}
export default reducedModel;
