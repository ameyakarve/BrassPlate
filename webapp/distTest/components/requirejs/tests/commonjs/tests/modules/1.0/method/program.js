define(["require","exports","module","test","a"],function(e){var i=e("test"),u=e("a"),s=u.foo;i.assert(u.foo()==u,"calling a module member"),i.assert(s()==function(){return this}(),"members not implicitly bound"),u.set(10),i.assert(10==u.get(),"get and set"),i.print("DONE","info")});