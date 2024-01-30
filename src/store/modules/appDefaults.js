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
            name: 'Введите имя',
            familly: 'Введите семью',
            father: 'Введите имя отца',
            sex: 'Введите секс',
            birthDate: 'Введите дату рождения',
            status: 'Введите статус',
            examLevel: 'Введите уровень экзамена',
            examModule: 'Введите уровень модуля',
            shortName: 'Введите короткое имя',
            title: 'Введите название',
            addUser: {
                nameMin: 'имя должно состоять более чем из 3 символов',
                famillyMin: 'семья должна состоять более чем из 3 символов',
                email: 'Введите адрес электронной почты',
                emailValid: 'Значение не является действительным адресом электронной почты',
                role: 'Введите роль',
            },
            addBranch: {
                name: 'Введите название филиала',
                branchCode: 'Введите код филиала',
                branchType: 'Введите тип филиала',
                branchSystemUsers: 'Введите пользователя филиала',
                city: 'Войдите в город',
                tin: 'Введите банку',
                actualAddress: 'Введите фактический адрес',
                checkpoint: 'Войдите в контрольно-пропускной пункт',
                legalAddress: 'Введите юридический адрес',
            },
            addSubtest: {
                maxScore: 'Введите максимальный балл',
                passingScore: 'Введите проходной балл',
                subtestType: 'Введите тип субтеста',
                checkType: 'Введите тип проверки',
            },
            addStudent: {
                nationality: 'Введите национальность',
                placeOfBirth: 'Введите место рождения',
                refNumber: 'Введите реферальный номер',
                issueDate: 'Введите дату выпуска',
                issueBy: 'Введите проблему по',
                migrationCard: 'Введите миграционную карту',
            },
            addQuestionBase: {
                type: 'Введите тип базы вопросов',
                subtest: 'Введите субтест',
            },
            addQuestion: {
                desc: 'Введите описание вопроса',
                questionTitle: 'Введите название вопроса',
            },
            addAnswers: {
                answers: 'Введите ответы',
                answersMin: 'ответов должно быть более 1 вариантов',
                answer: 'Введите ответ',
                correctAnswer: 'выберите правильный ответ',
            },
            correctingExam: {
                mark: 'Введите отметку',
                markMin: 'минимальный балл',
                markMax: 'максимальный балл',
            },
            changePassword: {
                currentPass: 'Введите текущий пароль',
                newPass: 'Введите новый пароль',
                newPassMin: 'поле пароля должно быть не менее 8 символов',
                confirmPass: 'подтверждение подтверждения пароля не совпадает',
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