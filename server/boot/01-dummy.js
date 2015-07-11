module.exports = function(app) {

  var Question  = app.models.Question,
      Answer   = app.models.Answer;

  if (app.dataSources.db.name !== 'Memory') {
    //check to see if we already imported data
  }else{
    createDefaultData();
  }

  function createDefaultData(){

    Question.create({
        text: "What did Marry have?",
        type: "radio"
      },
      function(err, res){
        res.children.create({text: "a gun"}, function(ea, ra){ //creates an answer for the question
          //creates a question for the answer
          ra.children.create({text: "Who did she shoot?", type: "radio"}, function(eaa, raa){
            //many answers for the question
            raa.children.create({text: "whiplash"});
            raa.children.create({text: "the muffin man"});
            raa.children.create({text: "the president"});
          });
        });

        res.children.create({text: "a knife"}, function(ea, ra){ //creates an answer for the question
          //creates a question for the answer
          ra.children.create({text: "What did she cook?", type: "radio"}, function(eaa, raa){
            //many answers for the question
            raa.children.create({text: "meatloaf"});
            raa.children.create({text: "chicken"});
            raa.children.create({text: "some fool"});
          });
        });

        res.children.create({text: "a lamb"}, function(ea, ra){ //creates an answer for the question
          //creates a question for the answer
          ra.children.create({text: "Was its flece as white as john snow?", type: "radio"}, function(eaa, raa){
            //many answers for the question
            raa.children.create({text: "Yes"});
            raa.children.create({text: "No"});
          });
        });
      });

  }

};
