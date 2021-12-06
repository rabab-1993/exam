# can't open the server 
- nodemonالحل تحميل باكج ال
# اسم باكج الmongoose غلط
- الحل نحمل الباكج الصحيح
# مسار ملف الdb غلط
- الحل require("./db/index");
# مسار الملف const todoModel = require("./../../db/models/todos"); غلط
- الحل: const todoModel = require("../../db/models/todo");
# اسم الباكج غلط const mongoose = require("mongose");
- الحل: const mongoose = require("mongoose");
# كلمة moudel غلط const todoModel = mongoose.module("Todo", todoSchema);
- الحل: const todoModel = mongoose.model("Todo", todoSchema);
# الاسم غلط module.export
- الحل:module.exports 
# ماسوينا import لupdateTodo
 - الحل نسوي امبورت
 # المشكله: morgan is not defined
 - الحل نعرف الmorgan
 - type: Boolean, string not boolean