ko.extenders.required =function(target,option){
    target.hasError=ko.observable();
    target.validationMessage=ko.observable();
    function validate(newValue){
        target.hasError(newValue?false:true);
        target.validationMessage(newValue?"":option||"This field is required");
    }
    validate(target());
    target.subscribe(validate)
    return target;
};



function studentviewModel() {
firstName = ko.observable();
middleName = ko.observable();
lastName = ko.observable();
passingyear = ko.observableArray(["2000","2001","2002","2003","2004","2005","2006","2007","2008","2009","2010","2011","2012","2013","2014","2015","2016","2017","2018","2019","2020","2021"]);
selectedyear  = ko.observable();
selectedGender = ko.observable("male");
date = ko.observable();
testscore1 = ko.observable();
testscore2 = ko.observable();
testscore3 = ko.observable();
testscore4 = ko.observable();

totalscore = ko.computed(function(){
    return (parseInt(testscore1()) + parseInt(testscore2()) + parseInt(testscore3()) + parseInt(testscore4()))*100/400;
    // total =  testscore1() +testscore2()+testscore3()+testscore4();
    //  return total;
},this)



}
const vm = new studentviewModel();
ko.applyBindings(vm);