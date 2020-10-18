상태 저장(save),복원(restore)
===
# 저장 save
canvas의 모든 상태를 저장합니다
# 복원 restore
가장 최근에 저장된 canvas 상태를 복원합니다.
# 특징
Canvas 상태는 스택(stack)에 쌓입니다. save() 메소드가 호출될 때마다 현재 drawing 상태가 스택 위로 푸시됩니다.
restore() 메소드가 호출될 때마다 현재 상태스택에 가장위의 정보가 나옵니다.

원점 이동 (translate)
===
# 원점 이동 translate(x,y)
canvas에서 원점은 왼쪽 제일 상단이지만 translate() 메소드를 사용하면 canvas의 원점이 바뀐다.

회전 (rotate)
===
#회전 (rotate(deg))
canvas의 현재 원점을 기준으로 라디안 angle 만큼 시계 방향으로 회전시킨다.

확대,축소 (scale)
===
#확대,축소 scale(scX,scY)
도형의 좌표(x,y)와 넓이 높이를 => 좌표 (x*scX , y*scY) , 넓이 * scX , 높이 * scY 로 바꾼다.  