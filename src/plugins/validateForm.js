export default {
    // 以校验的属性命名
    phone (value) {
        if (!value) return '请输入手机号'
        if (!/^1[3-9]\d{9}$/.test(value)) return '手机号格式错误'
        return true
    },
    password (value) {
        if (!value) return '请输入密码'
        return true
    },
    password1 (value, { form }) {
        if (!value) return '请再次输入密码'
        // 校验密码是否一致  form表单数据对象
        if (value !== form.password) return '两次输入的密码不一致'
        return true
    },
    code (value) {
        if (!value) return '请输入手机验证码'
        return true
    },
    agree (value) {
        if (value && value.length) {
            return true;
        }
        return '协议必须同意'
    }
}