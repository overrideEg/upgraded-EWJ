package com.overrideeg.apps.ewj.utils;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import org.apache.commons.io.IOUtils;

public class FileUtils {
    public FileUtils() {
    }

    public static String readFile(String fileName, String ls) {
        try {
            BufferedReader reader = new BufferedReader(new FileReader(fileName));
            String line = null;
            StringBuilder stringBuilder = new StringBuilder();

            while((line = reader.readLine()) != null) {
                stringBuilder.append(line);
                stringBuilder.append(ls);
            }

            reader.close();
            return stringBuilder.toString();
        } catch (Exception var5) {
            throw new RuntimeException(var5);
        }
    }

    public static String readStream(InputStream stream) {
        try {
            String string = IOUtils.toString(stream);
            stream.close();
            return string;
        } catch (IOException var2) {
            throw new RuntimeException(var2);
        }
    }

    public static void writeFile(String fileName, String data, boolean override) {
        if (!override) {
            File file = new File(fileName);
            if (file.exists()) {
                return;
            }
        }

        try {
            PrintWriter writer = new PrintWriter(new FileOutputStream(fileName));
            writer.write(data);
            writer.flush();
            writer.close();
        } catch (FileNotFoundException var5) {
            var5.printStackTrace();
        }

    }

    public static void deleteFolder(String path) {
        File file = new File(path);
        String[] list = file.list();
//        if (ObjectChecker.isNotEmptyOrNull(list)) {
//            for(int i = 0; i < list.length; ++i) {
//                deleteFolder(path + "/" + list[i]);
//            }
//        }

        file.delete();
    }

    public static String getWorkingDirectory() {
        return System.getProperty("user.dir");
    }

    public static String getWebInfoPath() {
        File myClass = new File(FileUtils.class.getProtectionDomain().getCodeSource().getLocation().getFile());

        for(int i = 0; i < 2; ++i) {
            myClass = myClass.getParentFile();
        }

        return myClass.getAbsolutePath().replaceAll("%20", " ") + File.separator;
    }

    public static boolean isZipFile(String fileName) {
        return isFileExtension(fileName, ".zip");
    }

    public static boolean isJRXMLFile(String fileName) {
        return isFileExtension(fileName, ".jrxml");
    }

    public static boolean isFileExtension(String fileName, String extension) {
        String fileNameLowerCase = fileName.toLowerCase();
        boolean isFileOfExtension = fileNameLowerCase.endsWith(extension.toLowerCase());
        return isFileOfExtension;
    }
}
