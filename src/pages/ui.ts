export module ui {
  const screen_width = window.innerWidth;
  const screen_height = window.innerHeight;

export function x(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  if (html_element != null)
  {
    html_element.style.setProperty("left",(percentage*screen_width)+"px");
  }
  else
  {
    var class_element = document.getElementsByClassName(element);
    for (var i = 0 ; i <= class_element.length; i++)
    {
      /*var new_element = (HTMLElement) class_element[i];
      new_element.style.setProperty("left",(percentage*screen_width)+"px");*/
    }
  }
}

export function y(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  html_element.style.setProperty("top",(percentage*screen_height)+"px");
}

export function position(element: string, x: number, y: number)
{
  this.x(element,x);
  this.y(element,y);
}

export function x_append(element: string, relative_to: string, percentage: number)
{
  var relative_to_element = document.getElementById(relative_to);
  var html_element = document.getElementById(element);
  html_element.style.setProperty("left",(percentage*relative_to_element.offsetWidth)+"px");
}

export function y_append(element: string, relative_to: string, percentage: number)
{
  var relative_to_element = document.getElementById(relative_to);
  var html_element = document.getElementById(element);
  html_element.style.setProperty("top",(percentage*relative_to_element.offsetHeight)+"px");
}

export function position_append(element: string, relative_to: string, x: number, y: number)
{
  this.x_append(element,relative_to,x);
  this.y_append(element,relative_to,y);
}

export function width(element: string, percentage: number, use_width = true)
{
  var html_element = document.getElementById(element);
  if (use_width)
  {
    html_element.style.setProperty("width",(screen_width*percentage)+"px");
  }
  else
  {
    html_element.style.setProperty("width",(screen_height*percentage)+"px");
  }
}

export function height(element: string, percentage: number, use_height = true)
{
  var html_element = document.getElementById(element);
  if (use_height)
  {
    html_element.style.setProperty("height",(screen_height*percentage)+"px");
  }
  else
  {
    html_element.style.setProperty("height",(screen_width*percentage)+"px");
  }
}

export function size(element: string, width: number, height: number, use_width = true, use_height = true)
{
  this.width(element,width,use_width);
  this.height(element,height,use_height);
}

export function layout(element: string, x: number, y: number, width: number, height: number, use_width = true, use_height = true)
{
  this.x(element,x);
  this.y(element,y);
  this.width(element,width,use_width);
  this.height(element,height,use_height);
}

export function font_size(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  html_element.style.setProperty("font-size",(percentage*screen_height)+"px");
}

export function margin_left(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  html_element.style.setProperty("margin-left",(percentage*screen_width)+"px");
}

export function margin_top(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  html_element.style.setProperty("margin-top",(percentage*screen_height)+"px");
}

export function margin_right(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  html_element.style.setProperty("margin-right",(percentage*screen_width)+"px");
}

export function margin_bottom(element: string, percentage: number)
{
  var html_element = document.getElementById(element);
  html_element.style.setProperty("margin-bottom",(percentage*screen_height)+"px");
}
}
