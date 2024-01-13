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
            key: 'admin',
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
        },
        all: 'Bсе',
        pdfErrorMessage: 'pdf не существует...',
        inputErrorMessages: {
            addUser: {
                name: 'Фамилия Необходимый',
                nameMin: 'имя должно состоять более чем из 3 символов',
                familly: 'Фамилия Необходимый',
                famillyMin: 'семья должна состоять более чем из 3 символов',
                father: 'Фамилия Необходимый',
                sex: 'Фамилия Необходимый',
                birthDate: 'Фамилия Необходимый',
                email: 'Фамилия Необходимый',
                role: 'Фамилия Необходимый',
                branchId: 'Фамилия Необходимый',
                status: 'Фамилия Необходимый',
            },
            addBranch: {
                name: 'Фамилия Необходимый',
                branchCode: 'Фамилия Необходимый',
                shortName: 'Фамилия Необходимый',
                branchType: 'Фамилия Необходимый',
                branchSystemUsers: 'Фамилия Необходимый',
                city: 'Фамилия Необходимый',
                tin: 'Фамилия Необходимый',
                actualAddress: 'Фамилия Необходимый',
                checkpoint: 'Фамилия Необходимый',
                legalAddress: 'Фамилия Необходимый',
            },
            addLevel: {
                title: 'Фамилия Необходимый',
                shortName: 'Фамилия Необходимый',
            },
            addModule: {
                title: 'Фамилия Необходимый',
                examLevelId: 'Фамилия Необходимый',
            },
            addSubtest: {
                title: 'Фамилия Необходимый',
                maxScore: 'Фамилия Необходимый',
                passingScore: 'Фамилия Необходимый',
                examLevelId: 'Фамилия Необходимый',
                examModuleId: 'Фамилия Необходимый',
                questionType: 'Фамилия Необходимый',
            },
            addStudent: {
                name: 'Фамилия Необходимый',
                familly: 'Фамилия Необходимый',
                father: 'Фамилия Необходимый',
                sex: 'Фамилия Необходимый',
                birthDate: 'Фамилия Необходимый',
                nationality: 'Фамилия Необходимый',
                placeOfBirth: 'Фамилия Необходимый',
                refNumber: 'Фамилия Необходимый',
                issueDate: 'Фамилия Необходимый',
                issueBy: 'Фамилия Необходимый',
                migrationCard: 'Фамилия Необходимый',
            },
            addQuestionBase: {
                title: 'Фамилия Необходимый',
                type: 'Фамилия Необходимый',
                status: 'Фамилия Необходимый',
                examLevelId: 'Фамилия Необходимый',
                examModuleId: 'Фамилия Необходимый',
                subtestId: 'Фамилия Необходимый',
            },
            addQuestion: {
                desc: 'Фамилия Необходимый',
                questionTitle: 'Описание вопроса',
                answers: 'Фамилия Необходимый',
                answer: 'Фамилия Необходимый',
            },
            addAnswers: {
                answers: 'Фамилия Необходимый',
                answersMin: 'ответов должно быть более 1 вариантов',
                answer: 'Фамилия Необходимый',
                correctAnswer: 'выберите правильный ответ',
            },
            correctingExam: {
                mark: 'Фамилия Необходимый',
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