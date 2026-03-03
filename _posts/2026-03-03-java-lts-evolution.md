---
layout: post
title: Java 11, 17, 21, 25 - The LTS Evolution
---

As the Java ecosystem continues to evolve with its six-month release cycle, the Long-Term Support (LTS) releases remain the bedrock for enterprise stability. Let's take a look at the major milestones from Java 11, 17, 21, and the newest LTS, Java 25.

## Java 11: Modernizing the Foundation

Released in September 2018, Java 11 brought several developer-centric improvements:

*   **HTTP Client (Standard) [JEP 321]**: A new `HttpClient` API replaced the aging `HttpURLConnection`.
    ```java
    var client = HttpClient.newHttpClient();
    var request = HttpRequest.newBuilder()
        .uri(URI.create("https://api.example.com"))
        .build();
    client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println);
    ```
*   **Local-Variable Syntax for Lambda Parameters [JEP 323]**: You can now use `var` in lambda expressions.
    ```java
    List<String> list = List.of("a", "b", "c");
    String result = list.stream()
        .map((@Nonnull var s) -> s.toUpperCase())
        .collect(Collectors.joining());
    ```
*   **Single-File Source-Code Programs [JEP 330]**: Run Java files directly without explicit compilation.
    ```bash
    java HelloWorld.java
    ```

## Java 17: Refining the Language

Java 17 (September 2021) focused on making the language more expressive and secure:

*   **Sealed Classes [JEP 409]**: Restrict which classes may extend or implement them.
    ```java
    public sealed interface Shape permits Circle, Square {}
    public final class Circle implements Shape {}
    public final class Square implements Shape {}
    ```
*   **Records [JEP 395]**: A concise way to create data-transfer objects (DTOs).
    ```java
    public record Point(int x, int y) {}
    ```
*   **Pattern Matching for switch (Preview) [JEP 406]**: Enhancing the `switch` statement to work with types.
    ```java
    static String formatter(Object obj) {
        return switch (obj) {
            case Integer i -> String.format("int %d", i);
            case Long l    -> String.format("long %d", l);
            case Double d  -> String.format("double %f", d);
            case String s  -> String.format("String %s", s);
            default        -> obj.toString();
        };
    }
    ```

## Java 21: The Next Giant Leap

Java 21 (September 2023) introduced groundbreaking features for scalability and data handling:

*   **Virtual Threads (Project Loom) [JEP 444]**: Lightweight threads for high-throughput concurrent applications.
    ```java
    try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
        IntStream.range(0, 10_000).forEach(i -> {
            executor.submit(() -> {
                Thread.sleep(Duration.ofSeconds(1));
                return i;
            });
        });
    }
    ```
*   **Sequenced Collections [JEP 431]**: New interfaces for collections with a defined encounter order.
    ```java
    LinkedHashSet<String> set = new LinkedHashSet<>();
    set.addFirst("first");
    set.addLast("last");
    String first = set.getFirst();
    ```
*   **Record Patterns [JEP 440]**: Deconstruct record values using pattern matching.
    ```java
    if (obj instanceof Point(int x, int y)) {
        System.out.println("Coordinates: " + x + ", " + y);
    }
    ```
*   **String Templates (Preview) [JEP 430]**: Introduced in Java 21 to simplify string composition. *Note: This feature was removed in JDK 23 pending a redesign and is not present in subsequent LTS versions in this form.*
    ```java
    String name = "Java";
    String message = STR."Hello \{name}!";
    ```

## Java 25: The First LTS of the Future

Released in September 2025, Java 25 continues the momentum of language modernization:

*   **Flexible Constructor Bodies [JEP 513]**: You can now execute code *before* calling `super()` or `this()` in a constructor.
    ```java
    public class Customer extends Person {
        private final UUID id;
        public Customer(String name) {
            if (name == null || name.isBlank()) throw new IllegalArgumentException();
            this.id = UUID.randomUUID();
            super(name); // Now allowed after initialization/validation!
        }
    }
    ```
*   **Module Import Declarations [JEP 511]**: Simplify your imports by importing an entire module's exported types.
    ```java
    import module java.base;
    import module com.company.utils;

    public class App {
        public static void main(String[] args) {
            List<String> list = List.of("Java 25"); // From java.base
            Logger.info("Starting..."); // From com.company.utils
        }
    }
    ```
*   **Key Derivation Function API [JEP 510]**: A standard API for password-based key derivation (PBKDF2, scrypt).
    ```java
    var kdf = KDF.getInstance("PBKDF2WithHmacSHA256");
    var key = kdf.deriveKey(...);
    ```
*   **Primitive Types in Patterns (Preview) [JEP 507]**: Extend pattern matching to work seamlessly with all primitive types.
    ```java
    if (obj instanceof int i) {
        System.out.println("It's an int: " + i);
    }
    ```

The transition from Java 11 to 25 shows a clear path towards simpler syntax, better performance, and superior concurrency models. Each LTS version brings significant refinements that make Java a more powerful and enjoyable language to work with!

## References

*   [OpenJDK: JDK 25 JEPs integrated since JDK 21](https://openjdk.org/projects/jdk/25/jeps-since-jdk-21)
*   [Oracle: JDK 25 Release Notes](https://www.oracle.com/java/technologies/javase/25all-relnotes.html)
*   [Java Almanac: Java 25 Features](https://javaalmanac.io/jdk/25/)
*   [Baeldung: String Templates in Java](https://www.baeldung.com/java-21-string-templates)
*   [Advanced Web Machinery: Categorized List of Java Features (JDK 8 to 21)](https://advancedweb.hu/a-categorized-list-of-all-java-and-jvm-features-since-jdk-8-to-21/)
