---
layout: post
title: Java 11, 17, 21, 25 - The LTS Evolution
---

As the Java ecosystem continues to evolve with its six-month release cycle, the Long-Term Support (LTS) releases remain the bedrock for enterprise stability. Let's take a look at the major milestones from Java 11, 17, 21, and the newest LTS, Java 25, and understand the motivations behind these powerful features.

## Java 11: Modernizing the Foundation

Released in September 2018, Java 11 brought several developer-centric improvements:

*   **HTTP Client (Standard) [JEP 321]**: *What it solves:* Replaces the legacy, difficult-to-use `HttpURLConnection` with a modern, asynchronous API that supports HTTP/2 and WebSockets natively.
    ```java
    var client = HttpClient.newHttpClient();
    var request = HttpRequest.newBuilder()
        .uri(URI.create("https://api.example.com"))
        .build();
    client.sendAsync(request, HttpResponse.BodyHandlers.ofString())
        .thenApply(HttpResponse::body)
        .thenAccept(System.out::println);
    ```
*   **Local-Variable Syntax for Lambda Parameters [JEP 323]**: *What it solves:* Enables the use of `var` in lambda expressions, primarily to allow for annotations (like `@Nonnull`) on lambda parameters, improving type safety and documentation.
    ```java
    List<String> list = List.of("a", "b", "c");
    String result = list.stream()
        .map((@Nonnull var s) -> s.toUpperCase())
        .collect(Collectors.joining());
    ```
*   **Single-File Source-Code Programs [JEP 330]**: *What it solves:* Reduces friction for beginners and small utility scripts by allowing them to run directly with the `java` command, eliminating the explicit `javac` compilation step.
    ```bash
    java HelloWorld.java
    ```

## Java 17: Refining the Language

Java 17 (September 2021) focused on making the language more expressive and secure:

*   **Sealed Classes [JEP 409]**: *What it solves:* Provides a declarative way to restrict class hierarchies. It allows developers to specify exactly which classes may extend a given class, enhancing security and allowing for better domain modeling.
    ```java
    public sealed interface Shape permits Circle, Square {}
    public final class Circle implements Shape {}
    public final class Square implements Shape {}
    ```
*   **Records [JEP 395]**: *What it solves:* Eliminates the massive boilerplate required for "data-carrying" classes (DTOs). It automatically generates constructors, accessors, `equals`, `hashCode`, and `toString`.
    ```java
    public record Point(int x, int y) {}
    ```
*   **Pattern Matching for switch (Preview) [JEP 406]**: *What it solves:* Reduces verbose and error-prone `instanceof` checks followed by explicit casting. It allows for a more concise and readable way to handle different types in a `switch` block.
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

*   **Virtual Threads (Project Loom) [JEP 444]**: *What it solves:* Solves the scalability bottleneck of the "one thread per request" model. Virtual threads are lightweight and allow applications to handle millions of concurrent tasks with minimal resource overhead.
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
*   **Sequenced Collections [JEP 431]**: *What it solves:* Standardizes access to the first and last elements of collections. Before this, developers had to use different, inconsistent APIs depending on whether they were using a `List`, `Deque`, or `SortedSet`.
    ```java
    LinkedHashSet<String> set = new LinkedHashSet<>();
    set.addFirst("first");
    set.addLast("last");
    String first = set.getFirst();
    ```
*   **Record Patterns [JEP 440]**: *What it solves:* Simplifies data extraction from records by allowing you to deconstruct record values directly within pattern matching logic.
    ```java
    if (obj instanceof Point(int x, int y)) {
        System.out.println("Coordinates: " + x + ", " + y);
    }
    ```
*   **String Templates (Preview) [JEP 430]**: *What it solves:* Aims to replace error-prone string concatenation and complex `String.format()` calls with a more secure and readable interpolation syntax. *Note: This feature was removed in JDK 23 pending a redesign.*
    ```java
    String name = "Java";
    String message = STR."Hello \{name}!";
    ```

## Java 25: The First LTS of the Future

Released in September 2025, Java 25 continues the momentum of language modernization:

*   **Flexible Constructor Bodies [JEP 513]**: *What it solves:* Allows developers to execute validation or initialization code *before* calling `super()` or `this()`. This removes a long-standing, rigid restriction in Java's constructor logic.
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
*   **Module Import Declarations [JEP 511]**: *What it solves:* Reduces the "import noise" in modular projects. It allows you to import all the exported types of a module with a single declaration, streamlining the development of large-scale modular applications.
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
*   **Key Derivation Function API [JEP 510]**: *What it solves:* Provides a standard, high-level API for cryptographic key derivation. This prevents fragmented and potentially insecure custom implementations of algorithms like PBKDF2 and scrypt.
    ```java
    var kdf = KDF.getInstance("PBKDF2WithHmacSHA256");
    var key = kdf.deriveKey(...);
    ```
*   **Primitive Types in Patterns (Preview) [JEP 507]**: *What it solves:* Enhances language consistency by extending the benefits of pattern matching (like deconstruction and type checking) to primitive types.
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
