# javascript-pattern
javascript 패턴을 적어 놓은 곳

1. pubSub 패턴 (2015-08-05)

 - callback을 여러군대서 받을 수 있음.
 - subscribe 후 다시 pushish 를 호출하면서 pipeline구조로 갈 수 있음
 - simple함.
 - 채팅에서도 사용할 수 있음.

2. command 패턴 (2015-08-05)

 - safetly call method 
 - 클래스가 변화되더라도 에러가 나지 않는다
 - 그외 장점은 실제로 더 사용해보고 알아봐야겠다

3. mixin 패턴
 - 클래스간 메소드 결합이 쉽다. 왜 해야하냐고 물어본다면...  inherit개념을 적용한 패턴?
