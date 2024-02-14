export default {
    state: {
        statusField: [{
            key: 'active',
            value: 'Активен'
        },
        {
            key: 'disable',
            value: 'Не активен'
        }
        ],
        subtestTypes: [{
            key: 'text',
            value: 'Тест'
        },
        {
            key: 'letter',
            value: 'Письмо'
        },
        {
            key: 'audio',
            value: 'Аудио'
        },
        {
            key: 'video',
            value: 'Видео'
        }
        ],
        boolTypes: [{
            key: 'false',
            value: 'Выключить'
        },
        {
            key: 'true',
            value: 'Включить'
        }],
        subtestCheckType: [
            {
                key: 'auto',
                value: 'Автоматический'
            },
            {
                key: 'manual',
                value: 'Ручной'
            }
        ],
        branchUserType: [{
            key: 'superAdmin',
            value: 'Супер администратор'
        },
        {
            key: 'branchAdmin',
            value: 'Администратор филиала'
        },
        {
            key: 'responsible',
            value: 'Ответственное лицо'
        },
        {
            key: 'official',
            value: 'Официальное лицо'
        },
        {
            key: 'checker',
            value: 'Проверяющий'
        }],
        branchType: [{
            key: 'master',
            value: 'Мастер',
        },
        {
            key: 'slave',
            value: 'Слейв'
        }],
        examStatus: [{
            key: 'new',
            value: 'Новая',
            cssClass: 'proverka new'
        },
        {
            key: 'onVerification',
            value: 'На проверке (акты)',
            cssClass: 'proverka pro'
        },
        {
            key: 'verificationCompleted',
            value: 'Проверка завершена',
            cssClass: 'proverka'
        },
        {
            key: 'acts',
            value: 'Требуются акты',
            cssClass: 'proverka treb'
        },
        {
            key: 'archived',
            value: 'В архиве',
            cssClass: 'proverka arhiv'
        },
        {
            key: 'rejected',
            value: 'Отклонено',
            cssClass: 'proverka red'
        },
        ],
        sexType: [
            {
                key: 'male',
                value: 'Мужской'
            },
            {
                key: 'female',
                value: 'Женский'
            }
        ],
        adminRoleTypes: [
            {
                key: 'superAdmin',
                value: 'Супер администратор'
            },
            {
                key: 'branchAdmin',
                value: 'Системный администратор'
            },
            {
                key: 'teacher',
                value: 'Преподаватель'
            }
        ],
        documentTypes: [
            {
                key: 'birthCertificate',
                value: 'Свидетельство о рождении'
            },
            {
                key: 'passport',
                value: 'Паспорт'
            },
            {
                key: 'rightOfResidence',
                value: 'Права'
            }
        ],
        userExamStatus: [
            {
                key: 'created',
                value: 'Новая'
            },
            {
                key: 'active',
                value: 'Активна'
            },
            {
                key: 'passed',
                value: 'Пройдена',

            },
            {
                key: 'success',
                value: 'Успешно',
            },
            {
                key: 'failed',
                value: 'Не успешно',
            },
            {
                key: 'waitingForCheck',
                value: 'Ожидает проверки'
            }
        ],
        defaultPaging: { pageSize: 10, maxVisibleButtons: 5 },
        paging: {},
        swalDeleteDialogConfig: {
            prompt: {
                title: 'Вы действительно хотите удалить данные?',
                text: "После удаления восстановить данные будет невозможно!",
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'Отменить',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Удалить',
                width: 'auto',
                height: 'auto',
            },
            successDelete: {
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
            },
            branchExamDonePrompt: {
                title: 'поставить экзамен как выполненный?',
                text: "экзамен будет переведен в статус выполнено",
                icon: 'info',
                showCancelButton: true,
                cancelButtonText: 'Отменить',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Отправить окончательно',
                width: 'auto',
                height: 'auto',
            },
            successChangePassword: {
                title: 'Измененный!',
                text: 'твой пароль изменен.',
                icon: 'success',
            },
            successResetPassword: {
                title: 'Измененный!',
                text: 'Пароль был сброшен.',
                icon: 'success',
            },
            audioNotUploaded: {
                title: 'Аудио не загружено!',
                text: 'Пожалуйста, загрузите аудио.',
                icon: 'warning',
            },
            videoNotUploaded: {
                title: 'Bидео не загружено!',
                text: 'Пожалуйста, загрузите видео.',
                icon: 'warning',
            },
        },
        all: 'Bсе',
        pdfErrorMessage: 'pdf не существует...',
        inputErrorMessages: {
            name: 'Введите имя', // Enter Your name
            familly: 'Введите фамилию', // Enter Your familly
            father: 'Введите имя отца', // Enter Your father's name
            sex: 'Введите пол', // Enter Your sex
            birthDate: 'Введите дату рождения', // Enter Your birth date
            status: 'Выберите статус', // select status
            examLevel: 'Выберите уровень экзамена', // select examLevel
            examModule: 'Выберите экзаменационный модуль', // select examModule
            shortName: 'Введите короткое имя', // Enter short name
            title: 'Введите название', // Enter the title
            addUser: {
                nameMin: 'имя должно состоять более чем из 3 символов', // name must be more than 3 characters
                famillyMin: 'фамилия должна состоять более чем из 3 символов', // familly must be more than 3 characters
                email: 'Введите адрес электронной почты', // Enter Your email
                emailValid: 'Электронная почта не действительна', // email is not valid
                role: 'Введите роль', // Enter Your role
            },
            addBranch: {
                name: 'Введите название филиала', // Enter branch name
                branchCode: 'Введите код филиала', // Enter brnach code
                branchType: 'Введите тип филиала', // Enter branch type
                branchSystemUsers: 'Введите ответственного за филиал', // Enter branch's responsible
                city: 'Укажите город', // Enter the city
                tin: 'Введите банку', // Enter the tin
                actualAddress: 'Введите фактический адрес', // Enter the actual address
                checkpoint: 'Войдите в контрольно-пропускной пункт', // Enter the check point
                legalAddress: 'Введите юридический адрес', // Enter the legal address
            },
            addSubtest: {
                maxScore: 'Введите максимальный балл', // Enter max score
                maxScoreMin: 'Максимальный балл должен быть больше чем', // max score must be more than ...
                passingScore: 'Введите проходной балл', // Enter passing score
                passingScoreMin: 'Проходной балл должен быть больше чем', // passing score must be more than ...
                passingScoreMax: 'Проходной балл должен быть ниже чем', // passing score must be lower than ...
                subtestType: 'Выберите тип субтеста', // select subtest type
                checkType: 'Выберите тип проверки', // select check type
            },
            addStudent: {
                nationality: 'Введите гражданство', // Enter user nationality
                placeOfBirth: 'Введите место рождения', // Enter user place of birth
                refNumber: 'Введите реферальный номер', // Enter ref number
                issueDate: 'Укажите дату выпуска', // Enter issue date
                issueBy: 'Введите проблему по', // Enter issue by
                migrationCard: 'Введите миграционную карту', // Enter migration card
            },
            addQuestionBase: {
                type: 'Выберите тип базы вопросов', // select question type
                subtest: 'Выберите субтест', // select subtest
            },
            addQuestion: {
                desc: 'Введите описание вопроса', // Enter desc
                questionTitle: 'Введите название вопроса', // Enter question title
            },
            addAnswers: {
                answers: 'Введите ответы', // Enter answers
                answersMin: 'Число ответов должно быть больше 1', // answers number must more than 1
                answer: 'Введите ответ', // Enter answer's title
                correctAnswer: 'выберите правильный ответ', // select correct answer
            },
            correctingExam: {
                mark: 'Введите отметку', // Enter user mark
                markMin: 'Отметка должна быть больше чем', // mark must be more than ...
                markMax: 'Отметка должна быть меньше чем', // mark must be lower than ...
            },
            changePassword: {
                currentPass: 'Введите текущий пароль', // Enter Your current password
                newPass: 'Введите новый пароль', // Enter Your new password
                newPassMin: 'Новый пароль должен состоять более чем из 8 символов', // new password must be more than 8 characters
                confirmPass: 'Подтверждение пароля не соответствует', // password confirmation does not match
            },
        }
    },
    mutations: {
        updatePaging: (state, data) => state.paging = data,
    },
    getters: {
        getStatusField: (state) => state.statusField,
        getSubtestTypes: (state) => state.subtestTypes,
        getBoolTypes: (state) => state.boolTypes,
        getDefaultPaging: (state) => state.defaultPaging,
        getPaging: (state) => state.paging,
        getSwalDeleteDialog: (state) => state.swalDeleteDialogConfig,
        getBranchUserType: (state) => state.branchUserType,
        getBranchType: (state) => state.branchType,
        getExamStatus: (state) => state.examStatus,
        getSubtestCheckType: (state) => state.subtestCheckType,
        getSexTypes: (state) => state.sexType,
        getAdminRoleTypes: (state) => state.adminRoleTypes,
        getDocumentTypes: (state) => state.documentTypes,
        getUserExamStatus: (state) => state.userExamStatus,
        getAllForDropdowns: (state) => state.all,
        getPdfErrorMessage: (state) => state.pdfErrorMessage,
        getinputErrorMessages: (state) => state.inputErrorMessages,
    }
}