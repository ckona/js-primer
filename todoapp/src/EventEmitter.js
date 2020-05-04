export class EventEmitter {
  constructor() {
    // [ eventName, Set(Listener function) ]
    this._listeners = new Map();
  }

  /**
   * 指定したイベントが実行されたときに呼び出されるリスナー関数を登録する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  addEventListener(type, listener) {
    if (!this._listeners.has(type)) {
      // Set型は重複が無い配列のようなもの
      this._listeners.set(type, new Set());
    }

    const listenerSet = this._listeners.get(type);
    listenerSet.add(listener);
  }

  /**
   * 指定したイベントをディスパッチする
   * @param {string} type イベント名
   */
  emit(type) {
    // 指定したイベントに対応するSetを取り出し、すべてのリスナー関数を呼び出す
    const listenerSet = this._listeners.get(type);

    if (!listenerSet) return;

    listenerSet.forEach(listener => {
      listener.call(this);
    });
  }

  /**
   * 指定したイベントのイベントリスナーを解除する
   * @param {string} type イベント名
   * @param {Function} listener イベントリスナー
   */
  removeEventListener(type, listener) {
    // 指定したイベントに対応するSetを取り出し、該当するリスナー関数を削除する
    const listenerSet = this._listeners.get(type);

    if (!listenerSet) return;

    listenerSet.forEach(ownListener => {
      if (ownListener === listener) {
        listenerSet.delete(listener);
      }
    });
  }
}
