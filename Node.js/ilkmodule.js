var ilkmodule = {
    informaiton:function(info){
        console.log("Informaiton : "+info);
    },
    fault:function(fault) {
        console.log("Fault: "+fault);
    }
};

//Şimdi bu bir module ama sistem bunu  bir module olduğunu belirtmedik. Bunu da aşağıda yapıyoruz.
module.exports = ilkmodule;