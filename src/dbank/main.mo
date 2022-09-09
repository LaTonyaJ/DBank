import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";


actor DBank {
  stable var currentValue : Float = 300;
  stable var startTime : Int = Time.now();

  Debug.print(debug_show(startTime));

  // let id = 315901365;

  public func inc(amt: Float){
    currentValue += amt;
    Debug.print(debug_show(currentValue));
  };

  public func dec(amt: Float){
    let tempVal: Float = currentValue - amt;
    if(tempVal >= 0){
    currentValue -= amt;
    Debug.print(debug_show(currentValue));
    }else{
      Debug.print("Amount not available");
    }
  };

  public query func checkBalance(): async Float{
    return currentValue;
  };

  public func compund() {
    var currentTime = Time.now();
    var elapsedTimeNS = currentTime - startTime;
    var elapsedTimeM = elapsedTimeNS / 60000000000;
    currentValue := currentValue * 0.05 ** Float.fromInt(elapsedTimeM);
    currentTime := startTime;
  }
  
};


