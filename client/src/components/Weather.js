var React=require('react');
var Weather1=require('./Weather1');
var loadeddata = false;
var Weather=React.createClass({
   getInitialState:function(){
     return({datas:[]})
   },
   getData:function(){

    var accessToken = localStorage.getItem('gToken');
     $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?q='+this.refs.city.value+'&appid=1b229d06e261f769c3a692257c928c00',
      dataType: 'json',
      async:false,
      type: 'GET',
      success: function(data)
      {

          this.setState({datas:data});
          loadeddata=true;

      }.bind(this),
      error: function(xhr, status, err) {
        console.error(err.toString());
      }.bind(this),
   });

 },

  render:function(){
     var wd;
    console.log("wfewr");
    console.log("angel");
    if(loadeddata)
    {
      console.log("sylvia");
      wd=<Weather1 details={this.state.datas}/>;
    }

    return(
      <div>
          <input type="text" className="form-control"  ref="city" placeholder="Search" />
          <button type="submit" className="btn btn-default" onClick={this.getData}>ADD1</button>
        {wd}
      </div>
    );
  }
})
module.exports=Weather
/*
<form className="navbar-form navbar-left" role="search">
    <div className="form-group" id="search">
      <input type="text" className="form-control"  ref="city" placeholder="Search" />
    </div>
    <button type="submit" className="btn btn-default" onClick={this.getData}>ADD</button>
  </form>

*/
