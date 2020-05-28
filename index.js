module.exports = {
    ra: {
        action: {
            add_filter: 'Filtr Əlavə et',
            add: 'Əlavə et',
            back: 'Geri Dön',
            bulk_actions: '1 seçildi |||| %{smart_count} seçildi',
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
            true: 'Bəli',
            false: 'Xeyir',
        },
        page: {
            create: '%{name} yarat',
            dashboard: 'Ana Səhifə',
            edit: '%{name} #%{id}',
            error: 'Bəzi şeylər düz deyil',
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
                '%{name} silmək istədiyinizdən əminsiniz? |||| %{smart_count} rekordu silmək istədiyinizdən əminsiniz?',
            bulk_delete_title:
                '%{name} sil |||| %{smart_count} %{name} rekordu sil',
            delete_content: 'Bu rekordu silmək istədiyinizdən əminsiniz?',
            delete_title: '%{name} #%{id} Sil',
            details: 'Detallar',
            error:
                "Bir istemci hatası oluştu ve isteğiniz tamamlanamadı.",
            invalid_form: 'Form geçerli değil. Lütfen hataları kontrol edin',
            loading: 'Sayfa yükleniyor, lütfen bekleyiniz',
            no: 'Hayır',
            not_found:
                'Hatalı bir URL girdiniz ya da yanlış bir linke tıkladınız',
            yes: 'Evet',
        },
        navigation: {
            no_results: 'Kayıt bulunamadı',
            no_more_results:
                '%{page} sayfası mevcut değil. Önceki sayfayı deneyin.',
            page_out_of_boundaries: '%{page} sayfası mevcut değil',
            page_out_from_end: 'Son sayfadan ileri gidemezsin',
            page_out_from_begin: '1. sayfadan geri gidemezsin',
            page_range_info: '%{offsetBegin}-%{offsetEnd} of %{total}',
            page_rows_per_page: 'Sayfa başına kayıtlar',
            next: 'Sonraki',
            prev: 'Önceki',
        },
        auth: {
            user_menu: 'Profil',
            username: 'Kullanıcı adı',
            password: 'Parola',
            sign_in: 'Giriş yap',
            sign_in_error: 'Giriş başarısız. Lütfen tekrar deneyin',
            logout: 'Çıkış',
        },
        notification: {
            updated: 'Öğe güncellendi |||| %{smart_count} öğe güncellendi',
            created: 'Öğe oluşturuldu',
            deleted: 'Öğe silindi |||| %{smart_count} öğe silindi',
            bad_item: 'Hatalı öğe',
            item_doesnt_exist: 'Öğe bulunamadı',
            http_error: 'Sunucu iletişim hatası',
            data_provider_error:
                'dataProvider hatası. Detay için konsolu gözden geçir.',
            canceled: 'Eylem iptal edildi',
            logged_out: 'Oturumunuz sona erdi, Lütfen yeniden bağlanın.'
        },
        validation: {
            required: 'Zorunlu alan',
            minLength: 'En az %{min} karakter',
            maxLength: 'En fazla %{max} karakter',
            minValue: 'En az %{min} olmalı',
            maxValue: 'En fazla %{max} olmali',
            number: 'Sayısal bir değer olmalı',
            email: 'E-posta geçerli değil',
            oneOf: 'Bunlardan biri olmalı: %{options}',
            regex: 'Belirli bir formatla eşleşmelidir (regexp): %{pattern}',
        },
    },
};
