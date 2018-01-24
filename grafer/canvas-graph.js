function fun1(x) {return x*x*x;  }
function fun2(x) {return Math.cos(3*x);}


var ctx = canvas.getContext("2d");
var axes={};

function draw() {
  var canvas = document.getElementById("canvas");
  if (null==canvas || !canvas.getContext) return;

  axes={};
  ctx = canvas.getContext("2d");
  axes.x0 = 0.5 + 0.5 * canvas.width;  // x0 pixels from left to x=0
  axes.y0 = 0.5 + 0.5 * canvas.height; // y0 pixels from top to y=0
  axes.scale = 25;                 // 40 pixels from x=0 to x=1
  axes.doNegativeX = true;

  showAxes(ctx,axes);
  //funGraph(ctx,axes,fun1,"rgb(11,153,11)",1);
  //funGraph(ctx,axes,fun2,"rgb(66,44,255)",2);

  //funGraph(ctx, axes,function(x) {return Math.sin(x)},"rgb(0,0,255)", 1);
  //funGraph(ctx, axes, function(x) { return x*x*x }, "rgb(255,0,0)", 1);
  //funGraph(ctx, axes, function (x) { return x + 2 }, "rgb(0,255,0)", 1);
}

function funGraph (ctx,axes,func,color,thick) {
  var xx, yy, dx = 4, x0 = axes.x0, y0 = axes.y0, scale = axes.scale;
  var iMax = Math.round((ctx.canvas.width-x0) / dx);
  var iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0;
  ctx.beginPath();
  ctx.lineWidth = thick;
  ctx.strokeStyle = color;

  for (var i = iMin; i <= iMax; i++) {
    xx = dx * i;
    yy = scale * func(xx / scale);
    if (i == iMin)
      ctx.moveTo(x0+xx,y0-yy);
    else
    ctx.lineTo(x0+xx,y0-yy);
  }
  ctx.stroke();
}

function showAxes(ctx,axes) {
  var x0=axes.x0, w=ctx.canvas.width;
  var y0=axes.y0, h=ctx.canvas.height;
  var xmin = axes.doNegativeX ? 0 : x0;
  ctx.beginPath();
  ctx.strokeStyle = "rgb(128,128,128)";
  ctx.moveTo(xmin,y0); ctx.lineTo(w,y0);  // X axis
  ctx.moveTo(x0,0);    ctx.lineTo(x0,h);  // Y axis
  ctx.stroke();
}

function init() {
  draw();
  //window.alert("f");


  document.getElementById("draw").addEventListener("click", function () {
    try {
      //window.alert("d");
      var funk = document.getElementById("textField").value;

      funGraph(ctx, axes, function(x) { return eval(funk) }, "rgb(255,0,0)", 1);
      //window.alert(document.getElementById("textField").value);
      draw();
    }
    catch(e) {window.alert(e);}
  });



}
