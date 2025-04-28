const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

function getFirst(list) {
  return list.head.value;
}

function getLast(list) {
  let current = list.head;
  while (current.next) {
    current = current.next;
  }
  return current.value;
}

function getAt(list, index) {
  let current = list.head;
  let count = 0;

  while (current) {
    if (count === index) {
      return current.value;
    }
    count++;
    current = current.next;
  }

  return null;
}

function addFirst(list, value) {
  const newNode = { value, next: list.head };
  list.head = newNode;
}

function addLast(list, value) {
  const newNode = { value, next: null };

  if (!list.head) {
    list.head = newNode;
    return;
  }

  let current = list.head;
  while (current.next) {
    current = current.next;
  }
  current.next = newNode;
}

function addAt(list, index, value) {
  if (index === 0) {
    addFirst(list, value);
    return;
  }

  let current = list.head;
  let count = 0;

  while (current) {
    if (count === index - 1) {
      const newNode = { value, next: current.next };
      current.next = newNode;
      return;
    }
    count++;
    current = current.next;
  }
}

function size(list) {
  let current = list.head;
  let count = 0;

  while (current) {
    count++;
    current = current.next;
  }

  return count;
}
