

// ����������� ��������
function max(array) {
    var maxValue = array[0]; 
    for (var i = 0; i < array.length; i++) { 
         if (maxValue < array[i]) maxValue = array[i];
    }
       return maxValue;
}

// �������� ��������
function min(array) {
    var minValue = array[0];
    for (var i = 0; i < array.length; i++) {
        if (minValue > array[i]) minValue = array[i];
    }
    return minValue;
}

// ������ ��������
function avg(array) {
    var sum = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    sum = sum / array.length;
    return sum;
}
