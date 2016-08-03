function Airport(weather){
  this._weather = typeof weather !== 'undefined' ? weather : new Weather();
  this._hangar = [];
}

Airport.prototype.planes = function(){
  return this._hangar; };

Airport.prototype.clearForLanding = function(plane){
  if(this._weather.isStormy()) {
    throw new Error('cannot land during storm');
  }
  this._hangar.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane){
  if(this._weather.isStormy()) {
    throw new Error('cannot takeoff during storm');
  }
  this._hangar = [];
};

Airport.prototype.isStormy = function(){
  return false;
};

function Weather(){
  this._CHANCE_OF_STORMY = 0.5;
}

Weather.prototype.isStormy = function(){
  return (Math.random() > this._CHANCE_OF_STORMY);
};
