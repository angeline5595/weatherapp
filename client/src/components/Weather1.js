var React=require('react');
var obj1={};
var Weather1=React.createClass({
  // getInitialState:function(){
  // return({det:{}})
  //  },
  componentDidMount:function()
  {
      obj1.lat=this.props.details.coord.lat;
      obj1.lon=this.props.details.coord.lon;
      obj1.humidity=this.props.details.main.humidity;
      obj1.pressure=this.props.details.main.pressure;
      obj1.sunrise=this.props.details.sys.sunrise;
      obj1.sunset=this.props.details.sys.sunset;
      obj1.cloud=this.props.details.weather[0].description;
      obj1.deg=this.props.details.wind.deg;
      obj1.speed=this.props.details.wind.speed;
      $.ajax({
     url:'http://localhost:8081/data/',
     dataType: 'json',
     async :false,
     type: 'POST',
     data:obj1,
     success: function(data)
     {
     console.log("success");
   }.bind(this),
   error: function(xhr, status, err) {
     console.log(err);
   }.bind(this)
});
  },
  render:function()
  {

return(
  <div>
  <table>
  <tr>
  <th>latitude</th>
  <td>{this.props.details.coord.lat}</td>
  </tr>
  <tr>
  <th>longitude</th>
  <td>{this.props.details.coord.lon}</td>
  </tr>
  <tr>
  <th>humidity</th>
  <td>{this.props.details.main.humidity}</td>
  </tr>
  <tr>
  <th>pressure</th>
  <td>{this.props.details.main.pressure}</td>
  </tr>
  <tr>
  <th>sunrise</th>
  <td>{this.props.details.sys.sunrise}</td>
  </tr>
  <tr>
  <th>sunset</th>
  <td>{this.props.details.sys.sunset}</td>
  </tr>
  <tr>
  <th>cloud</th>
  <td>{this.props.details.weather[0].description}</td>
  </tr>
  <tr>
  <th>degree</th>
  <td>{this.props.details.wind.deg}</td>
  </tr>
  <tr>
  <th>speed</th>
  <td>{this.props.details.wind.speed}</td>
  </tr>
</table>
  </div>);
}
})
module.exports=Weather1;
