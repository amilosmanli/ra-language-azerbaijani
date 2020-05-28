module.exports = {
    ra: {
        action: {
            add_filter: 'Filtr Əlavə et',
            add: 'Əlavə et',
            back: 'Geri Dön',
            bulk_actions: '1 seçildi |||| %{smart_count} qeyd  seçildi',
            cancel: 'Ləğv et',
            clear_input_value: 'Təmizlə',
            clone: 'Çoxalt',
            confirm: 'Təsdiq et',
            create: 'Yarat',
            delete: 'Sil',
            edit: 'Redaktə et',
            export: 'Fayla çıxar',
            list: 'Siyahı',
            refresh: 'Yenilə',
            remove_filter: 'Filtri sil',
            remove: 'Sil',
            save: 'Yadda saxla',
            search: 'Axtar',
            show: 'Göstər',
            sort: 'Sırala',
            undo: 'Geri qaytar',
        },
        boolean: {
            true: 'Doğrudur',
            false: 'Yanlışdır',
        },
        page: {
            create: '%{name} yarat',
            dashboard: 'Ana Səhifə',
            edit: '%{name} #%{id}',
            error: 'Səhvlər mövcuddur',
            list: '%{name} siyahısı',
            loading: 'Yüklənir',
            not_found: 'Səhifə tapılmadı',
            show: '%{name} #%{id}',
        },
        input: {
            file: {
                upload_several: 'Yükləmək istədiyiniz faylları bura atın və ya seçmək üçün klikləyin.',
                upload_single: 'Yükləmək istədiyiniz faylı bura atın və ya seçmək üçün klikləyin.',
            },
            image: {
                upload_several: 'Yükləmək istədiyiniz şəkilləri bura atın və ya seçmək üçün klikləyin.',
                upload_single: 'Yükləmək istədiyiniz şəkli bura atın və ya seçmək üçün klikləyin.',
            },
            references: {
                all_missing: 'Referans məlumatlar tapılmadı.',
                many_missing:
                    'Əlaqələndirilmiş referanslardan ən az biri artıq mövcud deyil.',
                single_missing:
                    'Əlaqələndirilmiş referans artıq mövcud deyil.',
            },
        },
        message: {
            about: 'Haqqında',
            are_you_sure: 'Əminsiniz?',
            bulk_delete_content:
                '%{name} silmək istədiyinizdən əminsiniz? |||| %{smart_count} qeydi silmək istədiyinizdən əminsiniz?',
            bulk_delete_title:
                '%{name} sil |||| %{smart_count} %{name} qeydi sil',
            delete_content: 'Bu qeydi silmək istədiyinizdən əminsiniz?',
            delete_title: '%{name} #%{id} Sil',
            details: 'Detallar',
            error:
                'Sorğu prosesi zamanı səhv baş verdi və sorğunu başa çatdırmaq mümkün deyil',
            invalid_form: 'Forma düzgün doldurulmayıb, səhvləri yoxlayın',
            loading: 'Səhifə tüklənir, zəhmət olmasa gözləyin',
            no: 'Xeyr',
            not_found: 'URL xətası və ya səhv linki izləyirsiniz',
            yes: 'Bəli',
        },
        navigation: {
            no_results: 'Qeyd tapılmadı',
            no_more_results:
                'Səhifə %{page} mövcud deyil. Əvvəlki səhifəni sınayın',
            page_out_of_boundaries: 'Səhifə %{page}  mövcud deyil',
            page_out_from_end: 'Son səhifədən keçmək olmur',
            page_out_from_begin: 'Birinci səhifədən önə keçmək olmur',
            page_range_info: '%{offsetBegin}-%{offsetEnd} / %{total}',
            page_rows_per_page: 'Sətirlərin sayı:',
            next: 'Növbəti',
            prev: 'Öncəki',
        },
        auth: {
            user_menu: 'Profil',
            username: 'İstifadəçi adı',
            password: 'Şifrə',
            sign_in: 'Giriş',
            sign_in_error: 'Giriş alınmadı. Təkrar yoxlayın',
            logout: 'Çıxış',
        },
        notification: {
            updated: 'Qeyd yeniləndi |||| %{smart_count} qeyd yeniləndi',
            created: 'Qeyd yaradıldı',
            deleted: 'Qeyd silindi |||| %{smart_count} qeyd silindi',
            bad_item: 'Qeyd düzgün deyil',
            item_doesnt_exist: 'Qeyd tapılmadı',
            http_error: 'Server xətası',
            data_provider_error:
                'dataProvider xətası. Daha ətraflı məlumat üçün konsolu nəzərdən keçirin.',
            canceled: 'Əməliyyat ləğv edildi',
            logged_out: 'Sessiya bitmişdir. Zəhmət olmasa yenidən giriş edin.'
        },
        validation: {
            required: 'Tələb olunur',
            minLength: 'Ən az %{min} simvol',
            maxLength: 'Ən çox %{max} simvol',
            minValue: 'Ən az %{min} olmalıdır',
            maxValue: 'Ən çox %{max} olmalıdır',
            number: 'Ədəd olmalıdır',
            email: 'E-mail düzgün deyil',
            oneOf: 'Bunlardan biri olmalıdır: %{options}',
            regex: 'Göstərilən (regexp) formatında olmalıdır: %{pattern}',
        },
    },
};
