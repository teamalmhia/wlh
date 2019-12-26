$(`<style> .fr.co{display:  none;}  
.rating-box {
  color: #a2a2a2;
  text-shadow: 0px 1px 10px black;
  margin: -19px auto 2px auto;
  height: 20px;
}

.rating-star {
  font-size: 20px !important;
  width: 15px;
  height: 20px;
  padding: 0 2px;
  position: relative;
  display: block;
  float: left;
}

.full-star:before {
  color: #f2b01e;
  content: "\2605";
  position: absolute;
  left: 0;
  overflow: hidden;
}

.empty-star:before {
  content: "\2605";
  position: absolute;
  left: 0;
  overflow: hidden;
}

.half-star:before {
  color: #f2b01e;
  content: "\2605";
  width: 60%;
  position: absolute;
  left: 0;
  overflow: hidden;
}

.half-star:after {
    content: '\2605';
    position: absolute;
    left: 9px;
    width: 75%;
    text-indent: -0.7rem;
    overflow: hidden;
}
            
      
@-webkit-keyframes rotate {
  100% {
    -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
  }
}

@keyframes rotate {
  100% {
    -webkit-transform: rotate(1turn);
            transform: rotate(1turn);
  }
}


.rainbow {
  position: relative;
  z-index: 0;
  border-radius: 10px;
  overflow: hidden;
  padding: 2px;
}
.rainbow::before {
  content: '';
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #399953;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(#399953, #399953), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);
  -webkit-animation: rotate 4s linear infinite;
          animation: rotate 4s linear infinite;
}
.rainbow::after {
  content: '';
  position: absolute;
  z-index: -1;
  left: 6px;
  top: 6px;
  width: calc(100% - 12px);
  height: calc(100% - 12px);
  background: white;
  border-radius: 5px;
}
.circle {
  height: 150px;
  width: 150px;
  margin: 10px 0 20px;
  border-radius: 100%;
  box-shadow: 0 1px 0 0 rgba(225, 131, 194, 0.25), 0 -1px 0 0 rgba(165, 181, 222, 0.25), 1px 0 0 0 rgba(225, 131, 194, 0.25), -4px 0 0 0 rgba(255, 0, 0, 0.75), 1px -1px 0 0 rgba(195, 156, 208, 0.5), -1px 1px 0 0 rgba(195, 156, 208, 0.5), 4px 1px 0 0 rgba(255, 105, 180, 0.75), -1px -1px 0 0 rgba(135, 206, 235, 0.75);
  animation: rotateThis 1s linear infinite;
}
@keyframes rotateThis {
  from {
    transform: rotate(0deg) scale(1);
  }
  to {
    transform: rotate(360deg) scale(1);
  }
}
</style>`).insertBefore ("body");

