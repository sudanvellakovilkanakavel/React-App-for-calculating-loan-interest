var React = require('react');
var ReactDOM = require('react-dom');


var HelloWorld = React.createClass({


calInterestandvalidation: function() {


if( document.myForm.age.value == "" )
         {
            alert( "Please provide your age!" );
            document.myForm.age.focus() ;
            return false;
         }
 if( document.myForm.income.value == "" )
         {
            alert( "Please provide your income!" );
            document.myForm.income.focus() ;
            return false;
         }
  if( document.myForm.loan.value == "" )
         {
            alert( "Please provide your loan!" );
            document.myForm.loan.focus() ;
            return false;
         }

  if( document.myForm.rate.value == "" )
         {
            alert( "Please provide your rate!" );
            document.myForm.rate.focus() ;
            return false;
         }
  if( document.myForm.months.value == "" )
         {
            alert( "Please provide your months!" );
            document.myForm.months.focus() ;
            return false;
         }

 return( true );

},



    render: function () {

    	return (
            <div className= "jumbotron col-sm-6 col-sm-offset-3 text-center"> 
             <form name="myForm" onSubmit= {this.calInterestandvalidation}>
             <h2>CHOOSE YOUR LOAN WISELY </h2>
            <h4>An React  App For Calculating Your Monthly Loan Interest in Different Canadian Banks</h4>
           
            
           <div class="form-group">
            <label>Choose a bank  :</label>
              <div class="col-sm-6">
            <select>
  <option value="">Canadian Imperial Bank of Commerce</option>
  <option value="">Bank of Montreal</option>
  <option value="">Laurentian Bank of Canada</option>
  <option value="">National Bank of Canada</option>
</select>
</div>
</div>
           <br />
           <div class="form-group">
            <label>Choose a Gender :</label>
              <div class="col-sm-6">
              <select>
  <option value="">Male</option>
  <option value="">Female</option>
  <option value="">Other</option>

</select>
</div>
</div>
<br />
             <div class="form-group">
            <label>Choose a loan type  :</label>
             <div class="col-sm-6">
            <select>
  <option value="">Personal</option>
  <option value="">Housiing</option>
  <option value="">Vechile</option>
  <option value="">Business</option>
</select>
</div>
</div>
           <br />

               <div class="form-group">
            <label>Enter the current age :</label> 
            <div class="col-sm-6">  
            <input type="number" class="form-control" name="age" placeholder="eg. 25" />
         </div>
         </div>
           <br />
           <div class="form-group">
            <label>Enter monthly income in $:</label> 
            <div class="col-sm-6"> 
            <input type="number" class="form-control" name="income" placeholder="eg. 30000" />
            </div>
            </div>
              <br />
         <div class="form-group">
            <label>Enter loan amount in $:</label> 
            <div class="col-sm-6"> 
            <input type="number" class="form-control" name="loan" placeholder="eg. 1000000" />
            </div>
            </div>
              <br />
             <div class="form-group">
            <label>Enter  interest rate in % : </label>
             <div class="col-sm-6"> 
            <input type="text" class="form-control" name="rate" placeholder="eg. 10.5" />
            </div>
            </div>
             <br />
           <div class="form-group">
            <label>Enter duration in months : </label>
            <div class="col-sm-6"> 
            <input type="number" class="form-control" name="months" placeholder="eg. 48" />
           </div>
            </div>
            <br />
              <br />
              <br />
              <div className="form-group col-sm-4 col-sm-offset-4">

            <button
className="btn btn-block btn-success"
type="submit">
CALCULATE
</button>
</div>
<br />
              <br />
              <br />

              <label>Amount payable on each month is (Interest+Principal):</label>
            </form>




            </div>

           
    		)
    }


});


ReactDOM.render(

<HelloWorld  />,
document.getElementById('app')


	);


