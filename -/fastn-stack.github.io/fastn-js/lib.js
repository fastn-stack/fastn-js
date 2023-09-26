function clampDecrement(a, by, min, max) {
    let newValue = (a.get() - by.get()) ;
    if (newValue < min.get()) {
        newValue = max.get() - 1;
    } else if (newValue >= min.get()) {
        newValue = min.get();
    }
    a.set(newValue);
}
